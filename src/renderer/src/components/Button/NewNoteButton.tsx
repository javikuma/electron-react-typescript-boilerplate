import { ActionButton, ActionButtonProps } from '@/components'
import { FilePlusIcon } from 'lucide-react'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FilePlusIcon className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
