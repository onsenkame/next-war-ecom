"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
    <Modal
        title="Create Store"
        description="Add a new store to your account. Manage products and categories here."
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
    >
        Will be create store form here
    </Modal>
    );
};
