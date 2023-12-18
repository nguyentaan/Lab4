import { FadeLoader } from "react-spinners";
import MyPage from "./MyPage";
import { Suspense } from "react";
function Ex12() {
  return (
    <Suspense fallback={<FadeLoader color={"Lightblue"} size={150} />}>
      <MyPage />
    </Suspense>
  );
}

export default Ex12;
