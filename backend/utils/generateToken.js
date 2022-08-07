import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'secretString', {
    expiresIn: '10d',
  })
}

export default generateToken