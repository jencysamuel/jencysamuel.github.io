dev:
	podman kube play --replace dev.kube.yml
devdown:
	podman kube down dev.kube.yml
