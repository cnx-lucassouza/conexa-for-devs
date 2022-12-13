const localStorageMock = (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    clear() {
      store = {}
    },
    removeItem(key) {
      delete store[key]
    },
  }
})()

const initalUserMock = {
  firstName: 'ConexaUser',
  lastName: 'Saúde',
  email: 'conexa.user@mail.com',
  permissions: ['admin'],
}

const userResponseDataMock = {
  firstName: 'ConexaUserResponse',
  lastName: 'Saúde',
  email: 'conexa.user@mail.com',
  permissions: ['admin', 'super-admin'],
}

const initialTokenMock = 'C0n3x@T0k3n'

export {
  localStorageMock,
  initalUserMock,
  userResponseDataMock,
  initialTokenMock,
}
