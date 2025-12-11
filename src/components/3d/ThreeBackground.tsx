
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const ParticleField = (props: any) => {
    const ref = useRef<any>();

    // Generate random points in a sphere
    const sphere = useMemo(() => {
        const temp = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.5 * Math.cbrt(Math.random()); // Cubic root for uniform distribution

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8b5cf6"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-background">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
