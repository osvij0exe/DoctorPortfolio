import { DoctorResume } from "../../components/DoctorResume"
import { HeroSection } from "../../components/HeroSection"
import { TrustSignalCrad } from "../../components/TrustSignalCard"

export const HomePage = () => {
    return (
        <>
        <HeroSection />
        <div className=" px-4 -mt-16 sm:mt-20 relative z-20 transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 pb-8 lg:grid-cols-4 gap-4 sm:gap-5">
                <TrustSignalCrad />
                <TrustSignalCrad />
                <TrustSignalCrad />
                <TrustSignalCrad />
            </div>
        </div>
        <DoctorResume />
        
        </>

    )
}
