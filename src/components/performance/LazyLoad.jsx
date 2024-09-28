import React, { Suspense, lazy, useState } from "react";
import Input from "../input/Input";

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const Text = lazy(() => delayForDemo(import('./Text')));

const LazyLoad = () => {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div>
      <label>
        <Input type="checkbox" onChange={() =>setShowPreview((prev) => !prev)} />
        show preview
      </label>
      {
        showPreview && 
        <Suspense fallback={<div>Loading...</div>}>
          <Text text="Hey... Whatsapp"/>
        </Suspense>
      }
    </div>
  );
};

export default LazyLoad;
