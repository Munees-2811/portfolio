import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '..', 'public');
const filePath = path.join(outputDir, 'Muneeswaran_R_Resume.pdf');

const pageWidth = 595;
const pageHeight = 842;
const margin = 52;

const escapePdfText = (value) => String(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const textCommands = [];

const addText = (x, y, text, size = 12, font = 'F1', color = [0, 0, 0], weight = 'normal') => {
  const fontName = font === 'F2' ? 'F2' : 'F1';
  const [r, g, b] = color;
  const textValue = escapePdfText(text);
  textCommands.push(`BT /${fontName} ${size} Tf 1 0 0 1 ${x} ${y} Tm ${r} ${g} ${b} rg (${textValue}) Tj ET`);

  if (weight === 'bold' && font === 'F1') {
    textCommands.push(`BT /F2 ${size} Tf 1 0 0 1 ${x} ${y} Tm ${r} ${g} ${b} rg (${textValue}) Tj ET`);
  }
};

const addRect = (x, y, width, height, color) => {
  const [r, g, b] = color;
  textCommands.push(`q ${r} ${g} ${b} rg ${x} ${y} ${width} ${height} re f Q`);
};

const addLine = (x1, y1, x2, y2, color = [0.45, 0.57, 0.7], width = 1) => {
  const [r, g, b] = color;
  textCommands.push(`q ${r} ${g} ${b} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S Q`);
};

const addBullet = (x, y, label, value) => {
  const safeLabel = escapePdfText(label);
  const safeValue = escapePdfText(value);
  textCommands.push(`BT /F2 9 Tf 1 0 0 1 ${x} ${y} Tm 0.64 0.72 0.88 rg (${safeLabel}) Tj ET`);
  textCommands.push(`BT /F1 10 Tf 1 0 0 1 ${x + 120} ${y} Tm 0.93 0.96 1 rg (${safeValue}) Tj ET`);
};

const addTag = (x, y, text, width = 80) => {
  const safeText = escapePdfText(text);
  textCommands.push(`q 0.19 0.23 0.35 rg ${x} ${y} ${width} 18 re f Q`);
  textCommands.push(`BT /F2 8 Tf 1 0 0 1 ${x + 8} ${y + 12} Tm 0.88 0.93 1 rg (${safeText}) Tj ET`);
};

const content = `
q
0.07 0.09 0.14 rg
0 0 ${pageWidth} ${pageHeight} re f
Q

q
0.14 0.18 0.28 rg
${margin} 700 ${pageWidth - 2 * margin} 120 re f
Q

q
0.46 0.59 0.99 rg
${margin} 700 6 120 re f
Q

q
0.11 0.15 0.24 rg
${margin} 652 ${pageWidth - 2 * margin} 1 re f
Q

BT /F2 28 Tf 1 0 0 1 68 780 Tm 0.98 0.98 1 rg (MUNEESWARAN R) Tj ET
BT /F1 11 Tf 1 0 0 1 68 760 Tm 0.65 0.77 1 rg (AI & DATA SCIENCE STUDENT / PYTHON DEVELOPER / WEB DEVELOPER) Tj ET

BT /F2 10 Tf 1 0 0 1 335 782 Tm 0.97 0.98 1 rg (PROFILE) Tj ET
BT /F1 10 Tf 1 0 0 1 335 768 Tm 0.7 0.78 0.95 rg (C O I M B A T O R E , I N D I A) Tj ET

BT /F2 9 Tf 1 0 0 1 68 710 Tm 0.75 0.8 1 rg (EMAIL) Tj ET
BT /F1 9 Tf 1 0 0 1 120 710 Tm 0.94 0.96 1 rg (munees7539@gmail.com) Tj ET

BT /F2 9 Tf 1 0 0 1 68 696 Tm 0.75 0.8 1 rg (GITHUB) Tj ET
BT /F1 9 Tf 1 0 0 1 120 696 Tm 0.94 0.96 1 rg (github.com/Munees-2811) Tj ET

BT /F2 9 Tf 1 0 0 1 68 682 Tm 0.75 0.8 1 rg (LINKEDIN) Tj ET
BT /F1 9 Tf 1 0 0 1 120 682 Tm 0.94 0.96 1 rg (linkedin.com/in/muneeswaran-r) Tj ET

q
0.14 0.18 0.28 rg
${margin} 550 ${pageWidth - 2 * margin} 1 re f
Q

BT /F2 14 Tf 1 0 0 1 68 525 Tm 0.98 0.98 1 rg (PROFILE) Tj ET
BT /F1 10 Tf 1 0 0 1 68 508 Tm 0.89 0.93 0.98 rg (I am an enthusiastic AI and Data Science student passionate about building practical software applications, AI-powered solutions and modern web experiences. I enjoy solving problems, learning new technologies and transforming ideas into real-world applications.) Tj ET

BT /F2 14 Tf 1 0 0 1 68 470 Tm 0.98 0.98 1 rg (CORE SKILLS) Tj ET

q
0.19 0.23 0.35 rg
96 427 72 18 re f
Q
BT /F2 8 Tf 1 0 0 1 106 441 Tm 0.9 0.96 1 rg (PYTHON) Tj ET

q
0.19 0.23 0.35 rg
176 427 70 18 re f
Q
BT /F2 8 Tf 1 0 0 1 186 441 Tm 0.9 0.96 1 rg (REACT) Tj ET

q
0.19 0.23 0.35 rg
254 427 78 18 re f
Q
BT /F2 8 Tf 1 0 0 1 265 441 Tm 0.9 0.96 1 rg (FASTAPI) Tj ET

q
0.19 0.23 0.35 rg
340 427 90 18 re f
Q
BT /F2 8 Tf 1 0 0 1 350 441 Tm 0.9 0.96 1 rg (COMPUTER VISION) Tj ET

q
0.19 0.23 0.35 rg
96 401 74 18 re f
Q
BT /F2 8 Tf 1 0 0 1 106 415 Tm 0.9 0.96 1 rg (JAVA) Tj ET

q
0.19 0.23 0.35 rg
178 401 82 18 re f
Q
BT /F2 8 Tf 1 0 0 1 189 415 Tm 0.9 0.96 1 rg (YOLO) Tj ET

q
0.19 0.23 0.35 rg
268 401 62 18 re f
Q
BT /F2 8 Tf 1 0 0 1 279 415 Tm 0.9 0.96 1 rg (OPENCV) Tj ET

q
0.19 0.23 0.35 rg
338 401 84 18 re f
Q
BT /F2 8 Tf 1 0 0 1 347 415 Tm 0.9 0.96 1 rg (DATA SCIENCE) Tj ET

BT /F2 14 Tf 1 0 0 1 330 525 Tm 0.98 0.98 1 rg (EDUCATION) Tj ET
BT /F1 10 Tf 1 0 0 1 330 508 Tm 0.89 0.93 0.98 rg (B.Tech in Artificial Intelligence and Data Science) Tj ET
BT /F1 9 Tf 1 0 0 1 330 494 Tm 0.68 0.75 0.9 rg (Hindusthan Institute of Technology, Coimbatore) Tj ET
BT /F1 9 Tf 1 0 0 1 330 480 Tm 0.68 0.75 0.9 rg (CGPA: 8.50) Tj ET

BT /F2 14 Tf 1 0 0 1 330 438 Tm 0.98 0.98 1 rg (EXPERIENCE) Tj ET
BT /F1 10 Tf 1 0 0 1 330 422 Tm 0.9 0.94 1 rg (Python Development Intern - CodeAlpha) Tj ET
BT /F1 9 Tf 1 0 0 1 330 408 Tm 0.68 0.75 0.9 rg (1 Month internship focused on Python and automation tasks.) Tj ET

BT /F2 14 Tf 1 0 0 1 330 370 Tm 0.98 0.98 1 rg (CERTIFICATIONS) Tj ET
BT /F1 9 Tf 1 0 0 1 330 356 Tm 0.88 0.93 1 rg (Infosys Springboard Certifications) Tj ET
BT /F1 9 Tf 1 0 0 1 330 342 Tm 0.88 0.93 1 rg (CodeAlpha Python Development Internship) Tj ET
BT /F1 9 Tf 1 0 0 1 330 328 Tm 0.88 0.93 1 rg (NPTEL - Python for Data Science) Tj ET

BT /F2 14 Tf 1 0 0 1 68 330 Tm 0.98 0.98 1 rg (PROJECTS) Tj ET
BT /F1 9 Tf 1 0 0 1 68 314 Tm 0.9 0.95 1 rg (Tode - AI Video Annotation Tool) Tj ET
BT /F1 8 Tf 1 0 0 1 68 300 Tm 0.72 0.79 0.94 rg (YOLO-based annotation, dataset export, computer vision workflows.) Tj ET
BT /F1 9 Tf 1 0 0 1 68 282 Tm 0.9 0.95 1 rg (Assured Farm - Contract Farming Platform) Tj ET
BT /F1 8 Tf 1 0 0 1 68 268 Tm 0.72 0.79 0.94 rg (Farmer and buyer marketplace with responsive dashboard flows.) Tj ET

q
0.14 0.18 0.28 rg
${margin} 226 ${pageWidth - 2 * margin} 1 re f
Q

BT /F2 10 Tf 1 0 0 1 68 210 Tm 0.97 0.98 1 rg (KEY TECHNOLOGIES) Tj ET

q
0.19 0.23 0.35 rg
70 178 55 18 re f
Q
BT /F2 7 Tf 1 0 0 1 81 191 Tm 0.88 0.93 1 rg (PYTHON) Tj ET

q
0.19 0.23 0.35 rg
134 178 46 18 re f
Q
BT /F2 7 Tf 1 0 0 1 145 191 Tm 0.88 0.93 1 rg (JAVA) Tj ET

q
0.19 0.23 0.35 rg
188 178 58 18 re f
Q
BT /F2 7 Tf 1 0 0 1 200 191 Tm 0.88 0.93 1 rg (REACT) Tj ET

q
0.19 0.23 0.35 rg
254 178 62 18 re f
Q
BT /F2 7 Tf 1 0 0 1 266 191 Tm 0.88 0.93 1 rg (FASTAPI) Tj ET

q
0.19 0.23 0.35 rg
324 178 56 18 re f
Q
BT /F2 7 Tf 1 0 0 1 335 191 Tm 0.88 0.93 1 rg (YOLO) Tj ET

q
0.19 0.23 0.35 rg
388 178 70 18 re f
Q
BT /F2 7 Tf 1 0 0 1 399 191 Tm 0.88 0.93 1 rg (OPENCV) Tj ET
`;

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>',
  `<< /Length ${Buffer.byteLength(content, 'latin1') + 1} >>\nstream\n${content}\nendstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
];

let pdf = '%PDF-1.4\n';
const offsets = [0];
for (let index = 0; index < objects.length; index += 1) {
  offsets.push(Buffer.byteLength(pdf, 'latin1'));
  pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`;
}

const xrefPosition = Buffer.byteLength(pdf, 'latin1');
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPosition}\n%%EOF`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(filePath, pdf, 'latin1');
console.log(`Created premium resume PDF at ${filePath}`);
