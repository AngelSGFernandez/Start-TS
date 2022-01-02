


/*
    ===== Código de TypeScript =====
*/

    let userName: string = "Angel";
    let healthPoints: number | string = 95;
    let state: boolean = true;

    healthPoints = "noventa y cinco";

    console.log(userName, " ", healthPoints, " ", state, " ")

    const app = document.getElementById("app");

    const p = document.createElement("p");

    p.textContent = "HOLA!"

    app.appendChild(p);