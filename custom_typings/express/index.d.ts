declare namespace Express {
  interface Request {
    file: Express.Multer.File;
  }
}

declare namespace Express {
  interface Request {
    user: {
      id: string;
    };
  }
}
