import Userinfobar from "../Userinfobar"

export const Layout = ({children}) =>{
    return (
      <div className="d-flex">
        <Userinfobar />
        <div className="childrenComponent">{children}</div>
      </div>
    );
}