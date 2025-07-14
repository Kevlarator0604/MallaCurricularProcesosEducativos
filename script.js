const subjects = [
  // Semestre 1
  { name: "Formación Humana y Social", semester: 1 },
  { name: "Lengua Extranjera I", semester: 1, unlocks: ["Lengua Extranjera II"] },
  { name: "Historia de la Educación", semester: 1 },
  { name: "Taller de Elaboración de Textos Académicos", semester: 1 },
  { name: "Filosofía de la Educación", semester: 1 },
  { name: "Psicología del Desarrollo y Procesos Cognitivos", semester: 1, unlocks: ["Psicología de la Educación"] },
  { name: "Didáctica General y Específicas", semester: 1, unlocks: ["Metodologías y Estrategias de Enseñanza y Aprendizaje"] },

  // Semestre 2
  { name: "Desarrollo de Habilidades del Pensamiento Complejo", semester: 2 },
  { name: "Lengua Extranjera II", semester: 2, unlocks: ["Lengua Extranjera III"], lockedBy: ["Lengua Extranjera I"] },
  { name: "Teorías Educativas", semester: 2 },
  { name: "Antropología de la Educación", semester: 2 },
  { name: "Sociología de la Educación", semester: 2 },
  { name: "Metodologías y Estrategias de Enseñanza y Aprendizaje", semester: 2, unlocks: ["Planeación Educativa"], lockedBy: ["Didáctica General y Específicas"] },
  { name: "Administración y Gestión Educativa", semester: 2, unlocks: ["Administración de Recursos Humanos"] },

  // Semestre 3
  { name: "Lengua Extranjera III", semester: 3, unlocks: ["Lengua Extranjera IV"], lockedBy: ["Lengua Extranjera II"] },
  { name: "Psicología de la Educación", semester: 3, lockedBy: ["Psicología del Desarrollo y Procesos Cognitivos"] },
  { name: "Planeación Educativa", semester: 3, unlocks: ["Materiales y Recursos Didácticos"], lockedBy: ["Metodologías y Estrategias de Enseñanza y Aprendizaje"] },
  { name: "Administración de Recursos Humanos", semester: 3, unlocks: ["Diseño y Financiamiento de Programas y Proyectos"], lockedBy: ["Administración y Gestión Educativa"] },
  { name: "Programas Educativos en Modalidades Mixtas", semester: 3, unlocks: ["Docencia en Modalidades Mixtas"] },
  { name: "Coordinación y Manejo de Grupos", semester: 3 },
  { name: "Pedagogía Social", semester: 3 },

  // Semestre 4
  { name: "Lengua Extranjera IV", semester: 4, lockedBy: ["Lengua Extranjera III"] },
  { name: "Sistema Educativo Mexicano", semester: 4, unlocks: ["Políticas Educativas"] },
  { name: "Materiales y Recursos Didácticos", semester: 4, unlocks: ["Diseño Curricular"], lockedBy: ["Planeación Educativa"] },
  { name: "Docencia en Modalidades Mixtas", semester: 4, unlocks: ["Gestión de Programas Educativos en Modalidades Mixtas"], lockedBy: ["Programas Educativos en Modalidades Mixtas"] },
  { name: "Fundamentos de la Formación Docente", semester: 4, unlocks: ["Estrategias para la Formación de Profesores y Capacitadores"] },
  { name: "Educación Sociocomunitaria", semester: 4, unlocks: ["Pedagogía Social y Desarrollo"] },
  { name: "Proyecto Educativo Comunitario", semester: 4, unlocks: ["Métodos de Investigación Educativa I"] },

  // Semestre 5
  { name: "Educación para la Diversidad", semester: 5 },
  { name: "Políticas Educativas", semester: 5, unlocks: ["Educación Comparada"], lockedBy: ["Sistema Educativo Mexicano"] },
  { name: "Diseño Curricular", semester: 5, unlocks: ["Evaluación Curricular"], lockedBy: ["Materiales y Recursos Didácticos"] },
  { name: "Diseño y Financiamiento de Programas y Proyectos", semester: 5, unlocks: ["Evaluación, Acreditación y Certificación"], lockedBy: ["Administración de Recursos Humanos"] },
  { name: "Gestión de Programas Educativos en Modalidades Mixtas", semester: 5, unlocks: ["Innovación Educativa"], lockedBy: ["Docencia en Modalidades Mixtas"] },
  { name: "Estrategias para la Formación de Profesores y Capacitadores", semester: 5, lockedBy: ["Fundamentos de la Formación Docente"] },
  { name: "Métodos de Investigación Educativa I", semester: 5, unlocks: ["Métodos de Investigación Educativa II"], lockedBy: ["Proyecto Educativo Comunitario"] },
  { name: "Optativa Complementaria", semester: 5 },

  // Semestre 6
  { name: "Educación Comparada", semester: 6, lockedBy: ["Políticas Educativas"] },
  { name: "Evaluación Curricular", semester: 6, lockedBy: ["Diseño Curricular"] },
  { name: "Evaluación, Acreditación y Certificación", semester: 6, lockedBy: ["Diseño y Financiamiento de Programas y Proyectos"] },
  { name: "Innovación Educativa", semester: 6, lockedBy: ["Gestión de Programas Educativos en Modalidades Mixtas"] },
  { name: "Pedagogía Social y Desarrollo", semester: 6, lockedBy: ["Educación Sociocomunitaria"] },
  { name: "Métodos de Investigación Educativa II", semester: 6, unlocks: ["Proyecto de Fin de Carrera"], lockedBy: ["Métodos de Investigación Educativa I"] },
  { name: "Optativa Complementaria", semester: 6 },

  // Semestre 7
  { name: "Proyecto de Fin de Carrera", semester: 7, unlocks: ["Seminario de Titulación"], lockedBy: ["Métodos de Investigación Educativa II"] },
  { name: "Servicio Social", semester: 7, unlocks: ["Práctica Profesional"] },
  { name: "Taller I", semester: 7 },
  { name: "Optativa Disciplinar", semester: 7 },

  // Semestre 8
  { name: "Seminario de Titulación", semester: 8, lockedBy: ["Proyecto de Fin de Carrera"] },
  { name: "Práctica Profesional", semester: 8, lockedBy: ["Servicio Social"] },
  { name: "Seminario I", semester: 8 },
  { name: "Optativa Complementaria", semester: 8 },
];

const mesh = document.getElementById("mesh");

subjects.forEach((subj) => {
  const div = document.createElement("div");
  div.className = "subject";
  div.textContent = subj.name;
  div.dataset.name = subj.name;
  subj.el = div;
  if (!subj.lockedBy) {
    div.classList.add("unlocked");
  }
  div.addEventListener("click", () => approveSubject(subj));
  mesh.appendChild(div);
});

function approveSubject(subj) {
  if (!subj.el.classList.contains("unlocked")) return;
  subj.el.classList.add("approved");
  subj.el.classList.remove("unlocked");

  if (subj.unlocks) {
    subj.unlocks.forEach((name) => {
      const unlocked = subjects.find((s) => s.name === name);
      if (unlocked && canUnlock(unlocked)) {
        unlocked.el.classList.add("unlocked");
      }
    });
  }
}

function canUnlock(subj) {
  if (!subj.lockedBy) return true;
  return subj.lockedBy.every((name) => {
    const prereq = subjects.find((s) => s.name === name);
    return prereq && prereq.el.classList.contains("approved");
  });
}
