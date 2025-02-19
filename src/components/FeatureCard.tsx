import { IconType } from "react-icons";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: IconType;
    index: number;
}

export const FeatureCard = ({ title, description, icon: Icon, index }: FeatureCardProps) => {
    return (
        <div className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 group hover:scale-[1.01] hover:bg-[rgba(255,223,101,0.9)] active:scale-[1.01] active:bg-[rgba(255,223,101,0.9)] transition-all duration-300 ease-out">
            {Icon && (
                <Icon className="text-[#FFDF65] w-12 h-12 mb-6 transition-colors duration-200 group-hover:text-black group-active:text-black" />
            )}
            <h3 className="text-xl font-bold mb-4 text-[#FFDF65] group-hover:text-black group-active:text-black transition-colors duration-200">
                {title}
            </h3>
            <p className="text-white group-hover:text-black group-active:text-black transition-colors duration-200">
                {description}
            </p>
        </div>
    );
};

