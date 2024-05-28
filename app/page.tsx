//import { BlogPosts } from 'app/components/posts'
"use client";
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { OrbitControls, CameraControls, Environment, Clone, PerspectiveCamera } from "@react-three/drei"
import { useGLTF } from "@react-three/drei"
import { Group } from 'three';

const Models = [
  { url : "/models/model.gltf" },
]

const Model = ({url}: any) => {
  const { scene } :any  = useGLTF(url)
  return <Clone object = {scene} />
}

const RotatingModel = ({ url }: any) => {
  const modelRef = useRef<Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // y 축으로 회전합니다.
    }
  });

  return (
    <group ref={modelRef}>
      <Model url={url} />
    </group>
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-20 text-2xl font-semibold tracking-tighter">
        F0F8FF.log
      </h1>
      <p className="lg:text-7xl text-6xl shrink-0 text-gray-900">
          <span className="font-light">{"I'm"}</span>
          <br />
          <span className="font-medium">Backend Developer</span>
          <br />
          <span className="font-light">currently working in Seoul.</span>
          <br />
          <span className="font-light text-5xl">Becoming a full stack developer.</span>
        </p>

        <div className="canvas-container">
            <Canvas camera = {{ position : [0,1,-1]}} gl={{ antialias: true }}  style={{width: "500px", height: "500px", overflow: "hidden", backgroundPosition: "center"}}>
                <Environment preset="city" />
                <Suspense>
                    <RotatingModel url={Models[0].url} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
