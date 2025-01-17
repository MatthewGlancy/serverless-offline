const { parse } = JSON

export const handler = async (event) => {
  const { body, requestContext } = event

  if (
    body &&
    parse(body).throwError &&
    requestContext &&
    requestContext.routeKey === '$default'
  ) {
    throw new Error('Throwing error from incoming message')
  }

  return {
    body: body || undefined,
    statusCode: 200,
  }
}
