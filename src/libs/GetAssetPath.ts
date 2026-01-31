// ฟังก์ชันช่วยเติม Base Path (ชื่อ repo) ให้กับรูปภาพ
export const getAssetPath = (path: string) => {
  const basePath = '/nextjs-portfolio';
  // ถ้า path เริ่มต้นด้วย / ให้เติม basePath เข้าไปข้างหน้า
  return path.startsWith('/') ? `${basePath}${path}` : path;
};