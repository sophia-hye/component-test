const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@designtokens': path.resolve(__dirname, 'src/designtokens/'),
      '@commonui': path.resolve(__dirname, 'src/commonui/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
