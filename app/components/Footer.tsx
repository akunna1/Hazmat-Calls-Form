export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center md:text-left italic">
      Hazmat Calls & Commercial Trucking Incidents Form {year}
    </footer>
  );
}