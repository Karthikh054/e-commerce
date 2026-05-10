import MainLayout from "../../layout/MainLayout";

export default function error() {
  return (
    <MainLayout>
      <div className="h-full flex justify-center items-center">
        <div className="text-2xl">404 Page Not Found</div>
      </div>
    </MainLayout>
  );
}
