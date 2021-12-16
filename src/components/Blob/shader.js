import glsl from 'babel-plugin-glsl/macro'

export const vertexShader = glsl`
    
    uniform float time;
    varying vec3 vPosition;
    varying vec3 vNormal;

    void main() {
        vPosition.y = position.y;
        float temp1 = (time + position.y) / 3.;
        float temp2 = (time + position.z) / 3.;
        float temp3 = (time + position.x) / 3.;
        
        // y as axis of rotation
        float x1 = position.x * (1.0 + .75 * sin(temp1) * .2);
        float y1 = position.y;
        float z1 = position.z * (1.0 + .75 * cos(temp1) * .2);

        // x as axis of rotation
        float x2 = position.x;
        float y2 = position.y * (1.0 + .75 * cos(temp3) * .2);
        float z2 = position.z * (1.0 + .75 * sin(temp3) * .2);

        // z as axis of rotation
        float x3 = position.x * (1.0 + .75 * cos(temp2) * .2);
        float y3 = position.y * (1.0 + .75 * sin(temp2) * .2);
        float z3 = position.z;

        vPosition.x = (x1 + x2 + x3) / 3.;
        vPosition.z = (z1 + z2 + z3) / 3.;
        vPosition.y = (y1 + y2 + y3) / 3.;


        gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
        vNormal = normalMatrix * normalize(normal); 
    }
`

export const fragmentShader = glsl`
    varying vec3 vNormal;

    void main() {
        vec3 view_nv  = vNormal;
        vec3 nv_color = view_nv * .5 + .5; 
        gl_FragColor  = vec4(nv_color, 1.0); 
    }
`