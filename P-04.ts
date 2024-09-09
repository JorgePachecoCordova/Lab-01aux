function crearUsuario(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const usuario = crearUsuario('Jorge Perez', '1234567890', 'Jorge@example.com');
console.log(usuario);