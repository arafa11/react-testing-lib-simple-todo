
const mockResponse = {
  data: {
    results: [
      {
        name: { first: "First", last: "Last" },
        picture: { large: "https://randomuser.me/api/portraits/men/59.jpg" },
        login: { username: "loginHandle" }
      }
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}