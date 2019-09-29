
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 3,
                    msg: "O nome precisa ser ter pelo menos 3 caracteres."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [6, 128],
                    msg: "O nome precisa ser ter entre 6 e 128 caracteres."
                },
                isEmail: {
                    msg: "O endereço de email precisa ser válido"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 3
                }
            }
        }

    })

    return User;

}