import { useStore } from "@/hooks/store-hook"
import logo from "@/assets/antd.svg"
export default () => {
  const { commonStore } = useStore()
  return (
    <>
      <div className="rowCC logo-box">
        <img width={!commonStore.collapsed ? "10%" : "30%"} src={logo} alt="" />
        {!commonStore.collapsed ? <div className="title">Wow Admin</div> : ""}
      </div>
    </>
  )
}
