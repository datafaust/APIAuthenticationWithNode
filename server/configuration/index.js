if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      google: {
        clientID: '328966677242-o5glutd77bcudki38goqjhnd97rak5ri.apps.googleusercontent.com',
        clientSecret: 'fEV_TQUO1MEmmdTTZ3DiHF5A',
      },
      facebook: {
        clientID: '421919292046055',
        clientSecret: 'd909d755b4493f21dc892e16c0aa6666',
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      google: {
        clientID: '328966677242-o5glutd77bcudki38goqjhnd97rak5ri.apps.googleusercontent.com',
        clientSecret: 'fEV_TQUO1MEmmdTTZ3DiHF5A',
      },
      facebook: {
        clientID: '421919292046055',
        clientSecret: 'd909d755b4493f21dc892e16c0aa6666',
      },
    },
  };
}