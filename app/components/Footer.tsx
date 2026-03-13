export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center md:text-left">
      Hazmat Calls & Commercial Trucking Incidents Form {year}
    </footer>
  );
}