import LegalHeader from "../../components/LegalHeader";
import LegalFooter from "../../components/LegalFooter";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ftv-legal">
      <div className="glow one"></div>
      <div className="glow two"></div>
      <div className="grain"></div>

      <div className="shell">
        <LegalHeader />
        {children}
      </div>

      <LegalFooter />
    </div>
  );
}