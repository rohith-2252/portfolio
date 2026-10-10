import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Gravity({
  children,
  gravity = { x: 0, y: 1 },
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const engine = Matter.Engine.create();

    engine.gravity.x = gravity.x;
    engine.gravity.y = gravity.y;

    const world = engine.world;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const render = Matter.Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        wireframes: true,
        background: "transparent",
        pixelRatio: 1,
      },
    });

    // The canvas is only used for the physics simulation.
    render.canvas.style.position = "absolute";
    render.canvas.style.inset = "0";
    render.canvas.style.width = "100%";
    render.canvas.style.height = "100%";
    render.canvas.style.opacity = "0";
    render.canvas.style.pointerEvents = "none";

    const elements = [
      ...container.querySelectorAll("[data-gravity-item]"),
    ];

    const bodies = [];

    elements.forEach((element) => {
      const containerRect = container.getBoundingClientRect();
      const rect = element.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Matter.Bodies.rectangle(
        x,
        y,
        rect.width,
        rect.height,
        {
          restitution: 0.4,
          friction: 0.3,
          frictionAir: 0.01,
          density: 0.002,
          chamfer: {
            radius: Math.min(rect.height / 2, 30),
          },
        }
      );

      Matter.Composite.add(world, body);

      bodies.push({
        body,
        element,
      });
    });

    const wallThickness = 100;

    function createWalls() {
      const w = container.clientWidth;
      const h = container.clientHeight;

      return [
        Matter.Bodies.rectangle(
          w / 2,
          h + wallThickness / 2,
          w + wallThickness * 2,
          wallThickness,
          { isStatic: true }
        ),
        Matter.Bodies.rectangle(
          -wallThickness / 2,
          h / 2,
          wallThickness,
          h * 2,
          { isStatic: true }
        ),
        Matter.Bodies.rectangle(
          w + wallThickness / 2,
          h / 2,
          wallThickness,
          h * 2,
          { isStatic: true }
        ),
        Matter.Bodies.rectangle(
          w / 2,
          -wallThickness / 2,
          w + wallThickness * 2,
          wallThickness,
          { isStatic: true }
        ),
      ];
    }

    let walls = createWalls();

    Matter.Composite.add(world, walls);

    // Use pointer events directly on the visible labels.
    // This avoids mouse-coordinate mismatches between the
    // invisible physics canvas and the rendered elements.
    let activeBody = null;
    let pointerOffsetX = 0;
    let pointerOffsetY = 0;

    function getPointerPosition(event) {
      const rect = container.getBoundingClientRect();

      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    function handlePointerDown(event) {
      const element = event.target.closest("[data-gravity-item]");

      if (!element || !container.contains(element)) return;

      const item = bodies.find((entry) => entry.element === element);

      if (!item) return;

      event.preventDefault();

      activeBody = item.body;

      const pointer = getPointerPosition(event);

      pointerOffsetX = activeBody.position.x - pointer.x;
      pointerOffsetY = activeBody.position.y - pointer.y;

      Matter.Body.setStatic(activeBody, true);

      element.setPointerCapture?.(event.pointerId);

      element.style.cursor = "grabbing";
      element.style.zIndex = "10";
    }

    function handlePointerMove(event) {
      if (!activeBody) return;

      const pointer = getPointerPosition(event);

      Matter.Body.setPosition(activeBody, {
        x: pointer.x + pointerOffsetX,
        y: pointer.y + pointerOffsetY,
      });

      Matter.Body.setVelocity(activeBody, {
        x: 0,
        y: 0,
      });
    }

    function handlePointerUp(event) {
      if (!activeBody) return;

      const item = bodies.find(
        (entry) => entry.body === activeBody
      );

      if (item) {
        item.element.style.cursor = "grab";
        item.element.style.zIndex = "2";
      }

      Matter.Body.setStatic(activeBody, false);

      activeBody = null;
    }

    container.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    window.addEventListener(
      "pointercancel",
      handlePointerUp
    );

    // Synchronize visible labels with their physics bodies.
    function updateElements() {
      bodies.forEach(({ body, element }) => {
        if (body === activeBody) {
          element.style.left = `${body.position.x}px`;
          element.style.top = `${body.position.y}px`;

          return;
        }

        element.style.left = `${body.position.x}px`;
        element.style.top = `${body.position.y}px`;

        element.style.transform =
          `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
    }

    const runner = Matter.Runner.create();

    Matter.Events.on(engine, "afterUpdate", updateElements);

    Matter.Render.run(render);
    Matter.Runner.run(runner, engine);

    const resizeObserver = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;

      render.canvas.width = w;
      render.canvas.height = h;

      render.options.width = w;
      render.options.height = h;

      Matter.Composite.remove(world, walls);

      walls = createWalls();

      Matter.Composite.add(world, walls);
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();

      container.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      window.removeEventListener(
        "pointercancel",
        handlePointerUp
      );

      Matter.Events.off(engine, "afterUpdate", updateElements);

      Matter.Runner.stop(runner);
      Matter.Render.stop(render);

      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);

      render.canvas.remove();
    };
  }, [gravity.x, gravity.y]);

  return (
    <div
      ref={containerRef}
      className={`gravity-container ${className}`}
    >
      <div className="gravity-items">{children}</div>
    </div>
  );
}

export function MatterBody({
  children,
  x = "50%",
  y = "10%",
  angle = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.style.left =
      typeof x === "number" ? `${x}%` : x;

    ref.current.style.top =
      typeof y === "number" ? `${y}%` : y;

    ref.current.style.transform =
      `translate(-50%, -50%) rotate(${angle}deg)`;
  }, [x, y, angle]);

  return (
    <div
      ref={ref}
      data-gravity-item
      className="gravity-item"
    >
      {children}
    </div>
  );
}