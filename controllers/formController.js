// context/AuthContext.js
const login = async ({ email, password }) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
  } catch (error) {
    console.error('Login error:', error);
  }
};
