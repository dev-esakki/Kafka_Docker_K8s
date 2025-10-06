# Kubernetes Commands Reference (Messaging Namespace)

This README provides a quick reference guide for managing and debugging Kubernetes resources in the **`messaging`** namespace — including pods, deployments, services, and namespaces.

---

## 🧱 1. View Pod Logs in Real-Time

Use the `kubectl logs` command to stream logs from a running pod continuously.

```bash
kubectl logs -f <POD NAME> -n messaging

kubectl describe pod <POD NAME> -n messaging

kubectl apply -f deployments/consumer.yml

kubectl get pods -n messaging

kubectl get service -n messaging

kubectl get deployment -n messaging

kubectl delete pod <POD NAME>

kubectl delete service <SERVICE NAME>

kubectl delete deployment <DEPLOYMENT NAME>


```

## Cluster Ip and nodePort
Shows all services that expose your pods to other pods or external traffic.

ClusterIP: Enables internal communication between pods within the cluster.

NodePort: Exposes the service externally via a port on each node’s IP.

| Resource        | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| **Pods**        | Wrappers around containers that run your applications.                              |
| **Services**    | Enable communication between pods (ClusterIP) or expose apps externally (NodePort). |
| **Deployments** | Manage replica sets, scaling, and version control for pods.                         |
| **Namespaces**  | Logical partitions within a Kubernetes cluster for resource isolation.              |


## Understanding Deployments vs Pods

In Kubernetes, you should define Deployments instead of creating raw Pod manifests manually.

Concept	Description
Pod	The smallest deployable unit in Kubernetes, which wraps one or more containers. However, pods are ephemeral — if deleted or fail, they don’t automatically restart.
Deployment	A higher-level controller that manages pods, ensures the desired number of replicas, and handles automatic restarts, updates, and rollbacks.

✅ Therefore:
You don’t need separate .pod YAML files for each service.
Instead, use Deployment manifests, which automatically create and manage the pods for you.
