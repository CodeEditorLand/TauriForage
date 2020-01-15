import {
  forage,
  cryptoForage,
  handler,
  crypto
} from 'src/index'

// these are just tests to make sure we are exporting properly

test('forage', async () => {
  const instance = await forage.createInstance()
  const res = typeof instance
  expect(res).toBe('object')
})
test('cryptoForage', async () => {
  const instance = await cryptoForage.enBox()
  const res = typeof instance
  expect(res).toBe('function')
})
test('handler', async () => {
  const instance = await handler.returner()
  const res = typeof instance
  expect(res).toBe('function')
})
test('crypto', async () => {
  let instance = await crypto.nonce()
  let res = typeof instance
  expect(res).toBe('object')
  instance = await crypto.hash('something')
  res = typeof instance
  expect(res).toBe('string')
 })
