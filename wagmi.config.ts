import { defineConfig } from '@wagmi/cli'
import { actions, hardhat } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    actions({
      getContract: true,
      readContract: true,
      prepareWriteContract: true,
      watchContractEvent: true,
    }),
    hardhat({
      project: './',
      deployments: {
        Lock: {
          11155111: '0x7006DCaEF839059abaD89710030E8742785bf960'
        }
      },
    }),
  ],
})
