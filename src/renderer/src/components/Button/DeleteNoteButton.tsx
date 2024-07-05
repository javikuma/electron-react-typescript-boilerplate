import { ActionButton, ActionButtonProps } from '@/components'
import { Trash2Icon } from 'lucide-react'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <Trash2Icon className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
