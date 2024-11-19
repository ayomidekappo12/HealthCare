import Image from "next/image";
import IconButton from "@/components/IconButton";

interface PatientCardProps {
  imageSrc: string;
  name: string;
  gender: string;
  age: number;
  className?: string;
  action?: () => void;
}

export default function PatientCard({
  imageSrc,
  name,
  gender,
  age,
  className = "",
  action,
}: PatientCardProps) {
  return (
    <div
      className={`flex flex-row items-center justify-between mt-3 py-2 pr-2 rounded-lg cursor-pointer ${className}`}
      onClick={action}
    >
      <div className="flex flex-row items-center px-3 opacity-100 gap-4">
        <Image
          src={imageSrc}
          alt={`${name}'s profile`}
          width={48}
          height={48}
          className="rounded-full"
          loading="lazy"
        />
        <div className="flex flex-col">
          <p className="text-left body-emphasized-14pt">{name}</p>
          <p className="text-left body-secondary-info-14pt">
            {gender}, {age}
          </p>
        </div>
      </div>
      <IconButton
        imageSrc="/images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
        className="bg-transparent -me-1"
        width={18}
        height={18}
      />
    </div>
  );
}
