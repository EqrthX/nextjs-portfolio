export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* ส่วนที่ 1: สรุปสั้นๆ หรือชื่อคุณ */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-xl mb-2">NONTPRAWITCH</h3>
          <p className="text-gray-400 text-sm">
            Aspiring Full-stack Developer & DevOps Enthusiast.
          </p>
        </div>

        {/* ส่วนที่ 2: ช่องทางการติดต่อหลัก */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-white font-semibold">Get in touch</p>
          <div className="flex gap-6">
            {/* Email */}
            <a href="mailto:nontprawitch.saetang@gmail.com" className="text-gray-400 hover:text-amber-500 transition-colors">
              Email
            </a>
            {/* GitHub - สำคัญมากสำหรับ Dev */}
            <a href="https://github.com/your-username" target="_blank" className="text-gray-400 hover:text-amber-500 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* ส่วนที่ 3: Copyright */}
      <div className="mt-12 text-center text-gray-600 text-xs">
        <p>© 2026 Nontprawitch Saetang. All rights reserved.</p>
      </div>
    </footer>
  );
}