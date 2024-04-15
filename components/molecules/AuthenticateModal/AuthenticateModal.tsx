"use client";
import { Button } from "@/components/atoms";
import { Dialog } from "@headlessui/react";
import { useAuth } from "react-oidc-context";

interface IAuthenticateModalProps {
  isOpen: boolean;
  close: () => void;
}

export const AuthenticateModal = ({
  isOpen,
  close,
}: IAuthenticateModalProps) => {
  const { signinRedirect, isAuthenticated } = useAuth();

  const handleLogin = () => {
    void signinRedirect();
  };

  const getRegisterLink = () => {
    const registerUrl = "https://myaccount.tmforum.org/register";
    const baseUrl = `https://${process.env.NEXT_PUBLIC_HOST_DOMAIN}`; // devbeta.ipsphere.net | tmforum.org
    const currentPage = localStorage.getItem("currentPage"); // '/' | '/pre-production' | '/historic'
    const encoded = encodeURIComponent(
      `${baseUrl}/oda/open-apis/table${currentPage}`,
    );
    const href = `${registerUrl}?spurl=${encoded}`;
    return href;
  };

  return (
    <Dialog open={isOpen} onClose={close} as="div" className="relative z-10">
      <div className="fixed inset-0 bg-black/25 backdrop-blur" />

      <Dialog.Panel className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-w-[394px] rounded-tl-[20px] rounded-br-[20px] border-shades-grey bg-white shadow-card p-[32px]">
        <p className="mb-[32px] text-center text-h5 text-core-blue font-bold">
          To get access to documentation you must login or register
        </p>

        <div className="flex items-center space-x-[10px] justify-between">
          <Button
            onClick={() => {
              window.location.href = getRegisterLink();
            }}
            size="full"
          >
            Register
          </Button>
          <Button onClick={handleLogin} size="full" color="white">
            Login
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
