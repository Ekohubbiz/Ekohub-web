import Sheet from 'react-modal-sheet';

const BottomSheet = ({ onClose, isOpen, children, title, snapPoints }) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={snapPoints}
      initialSnap={1}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="">
            <div className="mx-4 my-1 flex justify-between items-center">
              <span className="text-base text-gray-500 font-bold">{title}</span>
              <span
                className="cursor-pointer px-4 py-2 bg-white rounded-full drop-shadow-lg"
                onClick={onClose}
              >
                {'x'}
              </span>
            </div>
            <div className="overflow-y-auto">{children}</div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default BottomSheet;
