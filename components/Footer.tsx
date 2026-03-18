export default function Footer() {
  return (
    <footer className="py-6 px-6 text-center" style={{background:'#2d8a4e'}}>
      <p className="font-body text-sm" style={{color:'rgba(255,255,255,0.7)'}}>
        © {new Date().getFullYear()} by Hinonga o Tutuki Advisory.
      </p>
    </footer>
  );
}
