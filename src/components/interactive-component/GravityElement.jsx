import Gravity, { MatterBody } from "./Gravity";
import "./GravityElement.css";

const skills = [
  // Programming Languages
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },
  { name: "SQL", category: "language" },
  { name: "JavaScript", category: "language" },

  // CS Fundamentals
  { name: "Data Structures & Algorithms", category: "core" },
  { name: "Object-Oriented Programming", category: "core" },
  { name: "Database Management Systems", category: "core" },
  { name: "Operating Systems", category: "core" },
  { name: "Computer Networks", category: "core" },

  // Software Engineering
  { name: "REST APIs", category: "software" },
  { name: "Git & GitHub", category: "software" },
  { name: "Design Patterns", category: "software" },
  { name: "Software Development Life Cycle", category: "software" },

  // Artificial Intelligence
  { name: "Generative AI", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "Large Language Models", category: "ai" },

  // Databases
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },

  // Tools
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "GitHub", category: "tools" },
];

const positions = [
  { x: "12%", y: "18%" },
  { x: "34%", y: "12%" },
  { x: "59%", y: "17%" },
  { x: "82%", y: "13%" },

  { x: "22%", y: "30%" },
  { x: "52%", y: "27%" },
  { x: "78%", y: "32%" },
  { x: "13%", y: "45%" },

  { x: "43%", y: "42%" },
  { x: "70%", y: "46%" },
  { x: "29%", y: "55%" },
  { x: "87%", y: "56%" },

  { x: "14%", y: "68%" },
  { x: "46%", y: "65%" },
  { x: "73%", y: "70%" },
  { x: "34%", y: "79%" },

  { x: "60%", y: "83%" },
  { x: "85%", y: "79%" },
  { x: "18%", y: "87%" },
  { x: "48%", y: "92%" },
  { x: "78%", y: "92%" },
];

export default function GravityElements() {
  return (
    <section className="cyber-gravity-section" id="skills">
      {/* Cyberpunk background */}
      <div
        className="cyber-gravity-grid"
        aria-hidden="true"
      />

      <div
        className="cyber-gravity-glow"
        aria-hidden="true"
      />

      {/* Heading */}
      <header className="cyber-gravity-header">
        <div className="cyber-gravity-eyebrow">
        </div>

        <h2 className="cyber-gravity-title">
          MY TECHNICAL <span>ARSENAL</span>
          <span className="cyber-gravity-period">.</span>
        </h2>

      </header>

      {/* Full-screen physics playground */}
      <div className="cyber-gravity-stage">
        <Gravity
          gravity={{ x: 0, y: 0.8 }}
          className="cyber-gravity-playground"
        >
          {skills.map((skill, index) => (
            <MatterBody
              key={`${skill.name}-${index}`}
              x={positions[index].x}
              y={positions[index].y}
              angle={index % 2 === 0 ? -4 : 4}
            >
              <div
                className={`cyber-tech-pill cyber-tech-pill--${skill.category}`}
              >

                <span className="cyber-tech-pill__name">
                  {skill.name}
                </span>
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>

      {/* Footer */}
      <footer className="cyber-gravity-footer">

        <span className="cyber-gravity-footer-right">
        </span>
      </footer>
    </section>
  );
}