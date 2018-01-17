import variables from '../../style/themes/default.native';

export default {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
  icon: {
    margin: 5,
  },

  // theme color
  defaultTheme: {
    backgroundColor: variables.theme_default,
  },
  primaryTheme: {
    backgroundColor: variables.theme_primary,
  },
  successTheme: {
    backgroundColor: variables.theme_success,
  },
  warningTheme: {
    backgroundColor: variables.theme_warning,
  },
  errorTheme: {
    backgroundColor: variables.theme_error,
  },
};
