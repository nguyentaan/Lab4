import { lazy } from "react";

const MyFeature = lazy(()=>
    Promise.all([
        import ("./MyFeature"),
        new Promise((resolve)=>{
            setTimeout(() => {
                resolve();
            },3000);
        }),
    ]).then(([m])=>m)
)

function MyPage() {
    return ( 
        <div>
            <h1>My Page</h1>
            <MyFeature/>
        </div>
     );
}

export default MyPage;