import React from 'react';
import * as THREE from 'three';

export default function ThreeBackground({ currentPanel }) {
  const mountRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearColor(0x050811, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 1.5, 9);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const ptCyan = new THREE.PointLight(0x00e5ff, 1.5, 30);
    ptCyan.position.set(8, 8, 8); scene.add(ptCyan);
    const ptPurple = new THREE.PointLight(0xa855f7, 1.0, 25);
    ptPurple.position.set(-8, -6, -5); scene.add(ptPurple);
    const ptGold = new THREE.PointLight(0xfbbf24, 0.7, 20);
    ptGold.position.set(0, 0, 6); scene.add(ptGold);

    // AI GLOBE
    const globeGroup = new THREE.Group(); scene.add(globeGroup);

    const NODE_COUNT = 260;
    const nodePos = new Float32Array(NODE_COUNT * 3);
    const nodeCol = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 2.2 + (Math.random() - 0.5) * 0.28;
      nodePos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      nodePos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      nodePos[i*3+2] = r * Math.cos(phi);
      const t = (nodePos[i*3+1] / r + 1) / 2;
      nodeCol[i*3]   = t * 0.66;
      nodeCol[i*3+1] = t * 0.33 + (1-t) * 0.9;
      nodeCol[i*3+2] = 1.0;
    }
    const nodeBuf = new THREE.BufferGeometry();
    nodeBuf.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
    nodeBuf.setAttribute('color',    new THREE.BufferAttribute(nodeCol, 3));
    globeGroup.add(new THREE.Points(nodeBuf, new THREE.PointsMaterial({ size: 0.055, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true })));

    // Connection lines
    const lineArr = [];
    const pts3 = [];
    for (let i = 0; i < NODE_COUNT; i++) pts3.push(new THREE.Vector3(nodePos[i*3], nodePos[i*3+1], nodePos[i*3+2]));
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i+1; j < NODE_COUNT; j++) {
        if (pts3[i].distanceTo(pts3[j]) < 1.0) {
          lineArr.push(pts3[i].x, pts3[i].y, pts3[i].z, pts3[j].x, pts3[j].y, pts3[j].z);
        }
      }
    }
    const lineBuf = new THREE.BufferGeometry();
    lineBuf.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lineArr), 3));
    globeGroup.add(new THREE.LineSegments(lineBuf, new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.1 })));

    // Core glow
    globeGroup.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(2.0,32,32), new THREE.MeshBasicMaterial({ color: 0x0a1a3a, transparent: true, opacity: 0.35, side: THREE.BackSide })), {}));

    // Orbit rings
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.26, 0.008, 8, 120), new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.28 }));
    ring1.rotation.x = Math.PI / 2; globeGroup.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.26, 0.006, 8, 120), new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.18 }));
    ring2.rotation.set(Math.PI/3, 0.5, 0); globeGroup.add(ring2);

    // WEBSITE CARD TEXTURE
    function makeWebTexture() {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 192;
      const x = c.getContext('2d');
      x.fillStyle = '#0a0e1a'; x.fillRect(0,0,256,192);
      x.fillStyle = '#0d1628'; x.fillRect(0,0,256,24);
      x.fillStyle = '#00e5ff'; x.fillRect(10,8,40,8);
      for(let i=0;i<4;i++){x.fillStyle=`rgba(255,255,255,${0.2+i*.05})`;x.fillRect(180+i*17,9,12,5);}
      x.fillStyle='rgba(0,229,255,0.08)';x.fillRect(10,34,160,48);
      x.fillStyle='#fff';x.fillRect(14,40,100,8);x.fillRect(14,52,130,5);x.fillRect(14,60,80,5);
      x.fillStyle='#00e5ff';x.fillRect(14,70,48,10);
      x.fillStyle='rgba(168,85,247,0.3)';x.fillRect(180,30,66,60);
      x.fillStyle='#a855f7';x.fillRect(185,35,56,3);x.fillRect(185,41,45,2);x.fillRect(185,46,50,2);
      for(let i=0;i<3;i++){
        x.fillStyle='rgba(255,255,255,0.06)';x.fillRect(10+i*82,92,76,28);
        x.fillStyle='#fbbf24';x.fillRect(16+i*82,98,30,6);
        x.fillStyle='rgba(255,255,255,0.3)';x.fillRect(16+i*82,108,50,4);
      }
      for(let i=0;i<3;i++){
        x.fillStyle='rgba(0,229,255,0.05)';x.fillRect(10+i*82,130,76,50);
        x.fillStyle=[`#00e5ff`,`#a855f7`,`#fbbf24`][i];x.fillRect(14+i*82,135,24,24);
        x.fillStyle='rgba(255,255,255,0.5)';x.fillRect(44+i*82,135,38,5);x.fillRect(44+i*82,143,30,3);
        x.fillStyle='rgba(0,229,255,0.15)';x.fillRect(14+i*82,162,68,12);
      }
      x.fillStyle='rgba(0,229,255,0.05)';x.fillRect(0,186,256,6);
      return new THREE.CanvasTexture(c);
    }

    // Orbiting Website Screens
    const webTex = makeWebTexture();
    function makeScreen(radius, speed, offset, tilt) {
      const g = new THREE.Group(); scene.add(g);
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.5,1.12,0.04), new THREE.MeshStandardMaterial({ color: 0x0d1628, emissive: 0x0a1020, metalness: 0.7, roughness: 0.2 }));
      g.add(body);
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.44,1.06), new THREE.MeshBasicMaterial({ map: webTex }));
      screen.position.z = 0.022; g.add(screen);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.44,1.06), new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.05 }));
      glow.position.z = 0.023; g.add(glow);
      return { group: g, radius, speed, offset, tilt };
    }
    const screens = [
      makeScreen(4.2, 0.28, 0, 0.4),
      makeScreen(4.8, 0.20, 2.1, -0.3),
      makeScreen(4.0, 0.34, 4.2, 0.2),
    ];

    // Dollar Symbols
    function makeDollar(radius, speed, offset, tilt) {
      const g = new THREE.Group(); g.scale.setScalar(0.4); scene.add(g);
      const mat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0x92400e, emissiveIntensity: 0.3, metalness: 0.95, roughness: 0.1 });
      const matBright = new THREE.MeshStandardMaterial({ color: 0xfde68a, metalness: 1, roughness: 0.05 });
      g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.15,32), mat));
      const t1 = new THREE.Mesh(new THREE.TorusGeometry(0.22,0.06,8,24,Math.PI*1.5), matBright); t1.position.z=0.09; g.add(t1);
      const t2 = new THREE.Mesh(new THREE.TorusGeometry(0.22,0.06,8,24,Math.PI*1.5), matBright); t2.position.z=0.09; t2.rotation.z=Math.PI; g.add(t2);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.08,0.7,0.08), matBright); bar.position.z=0.09; g.add(bar);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.52,0.02,8,48), new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.6 })); g.add(rim);
      return { group: g, radius, speed, offset, tilt };
    }
    const dollars = [
      makeDollar(3.8, 0.36, 1.0, 0.5),
      makeDollar(4.6, 0.24, 3.5, -0.4),
      makeDollar(5.0, 0.18, 5.8, 0.1),
    ];

    // Ambient Particles
    const ambCount = 450;
    const ambPos = new Float32Array(ambCount * 3);
    for (let i = 0; i < ambCount; i++) {
        ambPos[i*3]   = (Math.random()-.5)*26;
        ambPos[i*3+1] = (Math.random()-.5)*15;
        ambPos[i*3+2] = (Math.random()-.5)*13;
    }
    const ambBuf = new THREE.BufferGeometry();
    ambBuf.setAttribute('position', new THREE.BufferAttribute(ambPos, 3));
    const ambParticles = new THREE.Points(ambBuf, new THREE.PointsMaterial({ size: 0.024, color: 0xffffff, transparent: true, opacity: 0.22, sizeAttenuation: true }));
    scene.add(ambParticles);

    const clock = new THREE.Clock();
    let animationId;

    const camTargets = [
      { pos: new THREE.Vector3(-1.8, 1.5, 9),  look: new THREE.Vector3(1.0, 0, 0) }, // 0 Home
      { pos: new THREE.Vector3(1.5, -0.5, 5.5), look: new THREE.Vector3(-1.0, 0, 0) }, // 1 About
      { pos: new THREE.Vector3(2.8, -0.4, 5.0), look: new THREE.Vector3(1.2, 0, 0) }, // 2 Services
      { pos: new THREE.Vector3(-2.8, 0.4, 6.0), look: new THREE.Vector3(-1.2, 0, 0) }, // 3 Products
      { pos: new THREE.Vector3(-1.8, 1.5, 9),  look: new THREE.Vector3(1.0, 0, 0) }, // 4 Contact
    ];
    let camProgress = 0;
    const camLookTarget = new THREE.Vector3();

    function animate3D() {
      animationId = requestAnimationFrame(animate3D);
      const elapsed = clock.getElapsedTime();

      // Globe rotation
      globeGroup.rotation.y += 0.0007;
      globeGroup.rotation.x += 0.0002;
      ambParticles.rotation.y += 0.00005;

      // Screens orbit
      screens.forEach(s => {
        const t = elapsed * s.speed + s.offset;
        s.group.position.x = Math.cos(t) * s.radius;
        s.group.position.y = Math.sin(t * 0.3) * 0.8 + s.tilt;
        s.group.position.z = Math.sin(t) * s.radius;
        s.group.rotation.y = -t + Math.PI / 6;
      });

      // Dollars orbit
      dollars.forEach(d => {
        const t = elapsed * d.speed + d.offset;
        d.group.position.x = Math.cos(t + Math.PI) * d.radius;
        d.group.position.y = Math.sin(t * 0.4) * 0.6 + d.tilt;
        d.group.position.z = Math.sin(t + Math.PI) * d.radius;
        d.group.rotation.y += 0.02;
        d.group.rotation.x = Math.sin(elapsed * 0.3 + d.offset) * 0.3;
      });

      // Update camera internally based on the ref we attach to window or handle globally
      // In this React wrapper, we read camProgress from a global or passed ref
      if (window._camProgress !== undefined) {
        camProgress = window._camProgress;
      }

      const clamped = Math.max(0, Math.min(4, camProgress));
      const a = Math.floor(clamped), b = Math.min(4, a + 1);
      const frac = clamped - a;
      const ease = frac < 0.5 ? 2*frac*frac : -1+(4-2*frac)*frac;
      const desiredPos = new THREE.Vector3().lerpVectors(camTargets[a].pos, camTargets[b].pos, ease);
      const desiredLook = new THREE.Vector3().lerpVectors(camTargets[a].look, camTargets[b].look, ease);
      camera.position.lerp(desiredPos, 0.035);
      camLookTarget.lerp(desiredLook, 0.035);
      camera.lookAt(camLookTarget);

      renderer.render(scene, camera);
    }
    animate3D();

    const handleResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      // Basic cleanup
      scene.clear();
    };
  }, []);

  React.useEffect(() => {
    // Expose current panel to ThreeJS animation loop via window
    window._camProgress = currentPanel;
  }, [currentPanel]);

  return <canvas id="bg-canvas" ref={mountRef}></canvas>;
}
