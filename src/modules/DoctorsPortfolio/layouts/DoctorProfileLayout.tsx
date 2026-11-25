import { Outlet } from "react-router"
import { CustomHeader } from "../../../components/Custom/CustomHeader"

export const DoctorProfileLayout = () => {
    return (
        <>
        <CustomHeader />
        <Outlet />
        </>
    )
}
