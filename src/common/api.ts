if (process.env.REACT_APP_BACKEND_URL === undefined || process.env.REACT_APP_ARCHIVE_URL === undefined) {
  throw new Error("REACT_APP_BACKEND_URL or REACT_APP_ARCHIVE_URL is not defined");
}

export const archiveUrl = process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_ARCHIVE_URL;
