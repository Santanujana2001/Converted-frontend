import React from "react";
import Universal from "./pages/unipage";
import Login from "./pages/login";
import Req from "../components/pages/request/request";
import Card from "../components/pages/stu_card/card";
let value=1;
// change the value to 1 for anonymous user
// change the value to 2 for logged in user
// change the value to 3 for request page
// change the value to 4 for student card page
function App() {
     if(value==1){
        return (
            <div>
               <Universal/>
            </div>
        );
     }
     else if(value==2){
        return (
            <div>
               <Login/>
            </div>
        );
     }
     else if(value==3){
        return (
            <div>
               <Req/>
            </div>
        );
     }
     else if(value==4){
        return (
            <div>
               <Card/>
            </div>
        );
     }

}
export default App;