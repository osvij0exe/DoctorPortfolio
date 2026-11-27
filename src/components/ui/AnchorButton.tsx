
interface AnchorButtonProps {
    buttonNanmeValue: string,
    icon?: React.ReactNode
}

export const AnchorButton = ({ buttonNanmeValue, icon }: AnchorButtonProps) => {
    return (
        <a
            href="*"
            className="inline-flex items-center justify-center gap-2 rounded-full 
                        bg-linear-to-r from-emerald-800 to-emerald-700
                        px-6 py-3 
                        font-semibold tracking-wide text-white 
                        shadow-lg shadow-emerald-900/20 
                        transition duration-200 
                        hover:-translate-y-0.5 
                        hover:from-emerald-700 hover:to-emerald-600 
                        hover:shadow-xl hover:shadow-emerald-900/25 
                        focus-visible:outline-2 focus-visible:outline-offset-2 
                        focus-visible:outline-emerald-800 active:translate-y-0"
        >
            {buttonNanmeValue}
            {icon && <span className="inline-flex">{icon}</span>}
        </a>
    )
}
