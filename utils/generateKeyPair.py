from rsa.key import newkeys

def generate_rsa_key_pair():
    # Generar un par de claves RSA
    public_key, private_key = newkeys(2048)

    # Guardar la clave privada en el archivo private_key.pem
    with open('private_key.pem', 'wb') as f:
        f.write(private_key.save_pkcs1())

    # Guardar la clave pública en el archivo public_key.pem
    with open('public_key.pem', 'wb') as f:
        f.write(public_key.save_pkcs1())

    print("Claves generadas y guardadas correctamente.")

# Llamar a la función para generar y guardar las claves
generate_rsa_key_pair()
