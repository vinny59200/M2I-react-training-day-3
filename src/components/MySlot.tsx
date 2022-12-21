import '../scss/MySlot.scss'

/* used only for UI/ UX display*/

export default function MySlot(props:any){
    return (
        <div className="MySlot" data-testid="m2i-a">{props.children}</div>
    )
}