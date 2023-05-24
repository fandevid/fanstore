import NavbarBottom from "@/components/NavbarBottom";
import NavbarTop from "@/components/NavbarTop";
import Image from "next/image";

const PageNotification = () => {
  return (
    <>
      <NavbarTop label={"Notifikasi"} />
      <div
        className="w-60 m-auto select-none"
        draggable={false}
        style={{
          position: "fixed",
          top: "calc(50vh - 7.5rem)",
          left: "calc(50vw - 7.5rem)",
        }}
      >
        <Image
          src={"/svg/undraw_notify.svg"}
          width={500}
          height={500}
          draggable={false}
        />
        <h4 className="text-slate-800 mt-4 text-sm text-center">
          Tidak Ada Notifikasi
        </h4>
      </div>
      <NavbarBottom />
    </>
  );
};

export default PageNotification;
