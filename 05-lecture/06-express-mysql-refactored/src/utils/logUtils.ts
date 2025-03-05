// Helper function. Error handling
export const logError = (error: unknown) => {
  return error instanceof Error 
    ? error.message 
    : "Unknown error"
}
