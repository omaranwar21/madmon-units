export const Endpoints = {
  host: process.env.NEXT_PUBLIC_API_URL as string,
  base: function () {
    return this.host + "/api/v1";
  },
  units: {
    getUnits: "/units",
  },
};

export const QueryKeys = {
  units: "units",
};
